"use client"
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Title from './utils/title';
import ScrollReveal from './utils/scroll-reveal';
import { ArrowUpRight, Calendar, Tag, Loader2, BookOpen } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

// ⚠️ Altere para o seu username do Medium
const MEDIUM_USERNAME = 'eliasvitor.dev';
const PER_PAGE = 6;

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

function readingTime(html) {
  const words = html?.replace(/<[^>]*>/g, '').split(/\s+/).length ?? 0;
  return `${Math.max(1, Math.round(words / 200))} min`;
}

function PostCard({ post, index }) {
  return (
    <ScrollReveal delay={index * 60}>
      <Link
        href={post.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col h-full rounded-xl border border-border bg-card p-4 hover:shadow-card transition-shadow duration-300"
      >
        {/* Thumbnail */}
        {post.thumbnail && (
          <div className="w-full h-36 rounded-lg overflow-hidden mb-4 bg-secondary shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.thumbnail}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}

        {/* Tags */}
        {post.categories?.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-2">
            {post.categories.slice(0, 3).map((cat) => (
              <span
                key={cat}
                className="tech-label text-[10px] px-1.5 py-0.5 rounded bg-primary/10 text-primary border border-primary/20"
              >
                {cat}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-snug mb-2 flex-1">
          {post.title}
        </h3>

        {/* Description */}
        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mb-3">
          {post.description?.replace(/<[^>]*>/g, '').slice(0, 120)}...
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto pt-2 border-t border-border/60">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
              <Calendar className="w-2.5 h-2.5 shrink-0" />
              {formatDate(post.pubDate)}
            </span>
            <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
              <BookOpen className="w-2.5 h-2.5 shrink-0" />
              {readingTime(post.content)}
            </span>
          </div>
          <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </div>
      </Link>
    </ScrollReveal>
  );
}

export default function Blog() {
  const [posts, setPosts]     = useState([]);
  const [page, setPage]       = useState(1);
  const [total, setTotal]     = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  const totalPages = Math.ceil(total / PER_PAGE);

  const fetchPosts = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const rssUrl = encodeURIComponent(`https://medium.com/feed/@${MEDIUM_USERNAME}`);
      const res = await fetch(
        `https://api.rss2json.com/v1/api.json?rss_url=${rssUrl}`
      );
      if (!res.ok) throw new Error('Falha ao buscar posts');
      const data = await res.json();
      if (data.status !== 'ok') throw new Error(data.message ?? 'Erro no feed');

      const all = data.items ?? [];
      setTotal(all.length);
      setPosts(all);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchPosts(); }, [fetchPosts]);

  const paginated = posts.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <section className="py-10 bg-background" id="blog">
      <div className="max-w-5xl mx-auto px-6">
        <Title title="Blog" />

        <p className="text-sm text-muted-foreground mb-8 -mt-2">
          Artigos e reflexões sobre desenvolvimento, arquitetura e tecnologia.
        </p>

        {/* Loading */}
        {loading && (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-5 h-5 text-primary animate-spin" />
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="text-center py-16">
            <p className="text-sm text-muted-foreground mb-1">Não foi possível carregar os posts.</p>
            <p className="text-xs text-muted-foreground/60 mb-4">{error}</p>
            <Button size="sm" variant="outline" onClick={fetchPosts}>
              Tentar novamente
            </Button>
          </div>
        )}

        {/* Empty */}
        {!loading && !error && posts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-sm text-muted-foreground">Nenhum post encontrado.</p>
            <p className="text-xs text-muted-foreground/60 mt-1">
              Verifique se o username <code className="text-primary">@{MEDIUM_USERNAME}</code> está correto.
            </p>
          </div>
        )}

        {/* Grid de posts */}
        {!loading && !error && paginated.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {paginated.map((post, i) => (
              <PostCard key={post.link} post={post} index={i} />
            ))}
          </div>
        )}

        {/* Paginação */}
        {!loading && !error && totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-10">
            <Button
              size="sm" variant="outline"
              className="w-8 h-8 p-0 border-border"
              disabled={page === 1}
              onClick={() => setPage((p) => p - 1)}
            >
              ‹
            </Button>

            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter((p) => p === 1 || p === totalPages || Math.abs(p - page) <= 1)
                .reduce((acc, p, idx, arr) => {
                  if (idx > 0 && p - arr[idx - 1] > 1) acc.push('…');
                  acc.push(p);
                  return acc;
                }, [])
                .map((item, idx) =>
                  item === '…' ? (
                    <span key={`e-${idx}`} className="px-1 text-xs text-muted-foreground">…</span>
                  ) : (
                    <button
                      key={item}
                      onClick={() => setPage(item)}
                      className={`w-8 h-8 rounded-lg text-xs font-medium transition-colors ${
                        page === item
                          ? 'bg-primary text-primary-foreground'
                          : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                      }`}
                    >
                      {item}
                    </button>
                  )
                )}
            </div>

            <Button
              size="sm" variant="outline"
              className="w-8 h-8 p-0 border-border"
              disabled={page === totalPages}
              onClick={() => setPage((p) => p + 1)}
            >
              ›
            </Button>
          </div>
        )}

        {/* Link externo */}
        {!loading && !error && posts.length > 0 && (
          <div className="mt-8 pt-6 border-t border-border">
            <Link
              href={`https://medium.com/@${MEDIUM_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Ver todos os artigos no Medium
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
