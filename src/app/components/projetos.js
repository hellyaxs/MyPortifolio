"use client"
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Title from './utils/title';
import ScrollReveal from './utils/scroll-reveal';
import { ArrowUpRight, Globe, Star, GitFork, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

const GITHUB_USER = 'hellyaxs';
const PER_PAGE = 9;

const LANG_META = {
  JavaScript: { slug: 'javascript/javascript-original', color: '#f1e05a' },
  TypeScript: { slug: 'typescript/typescript-original', color: '#3178c6' },
  Java:       { slug: 'java/java-original',             color: '#b07219' },
  Python:     { slug: 'python/python-original',         color: '#3572A5' },
  Dart:       { slug: 'dart/dart-original',             color: '#00B4AB' },
  Shell:      { slug: 'bash/bash-original',             color: '#4EAA25' },
  HTML:       { slug: 'html5/html5-original',           color: '#e34c26' },
  CSS:        { slug: 'css3/css3-original',             color: '#563d7c' },
  C:          { slug: 'c/c-original',                   color: '#555555' },
  'C++':      { slug: 'cplusplus/cplusplus-original',   color: '#f34b7d' },
  Kotlin:     { slug: 'kotlin/kotlin-original',         color: '#7F52FF' },
  Go:         { slug: 'go/go-original',                 color: '#00ADD8' },
  Ruby:       { slug: 'ruby/ruby-original',             color: '#CC342D' },
  Rust:       { slug: 'rust/rust-original',             color: '#DEA584' },
  Swift:      { slug: 'swift/swift-original',           color: '#F05138' },
  PHP:        { slug: 'php/php-original',               color: '#777BB4' },
  Vue:        { slug: 'vuejs/vuejs-original',           color: '#42b883' },
  Svelte:     { slug: 'svelte/svelte-original',         color: '#FF3E00' },
  Dockerfile: { slug: 'docker/docker-original',         color: '#2496ED' },
};

const DEVICON_BASE =
  'https://raw.githubusercontent.com/devicons/devicon/master/icons';

function LanguageIcon({ lang }) {
  const meta = LANG_META[lang];

  if (meta) {
    return (
      <span className="flex items-center gap-2">
        <span
          className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
          style={{ backgroundColor: `${meta.color}22`, border: `1.5px solid ${meta.color}66` }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${DEVICON_BASE}/${meta.slug}.svg`}
            alt={lang}
            width={20}
            height={20}
          />
        </span>
        <span className="text-xs text-muted-foreground">{lang}</span>
      </span>
    );
  }

  // Fallback
  return (
    <span className="flex items-center gap-2">
      <span className="w-9 h-9 rounded-full bg-muted/40 border border-border flex items-center justify-center shrink-0">
        <span className="w-3 h-3 rounded-full bg-muted-foreground/40" />
      </span>
      <span className="text-xs text-muted-foreground">{lang}</span>
    </span>
  );
}

export default function Projects() {
  const [repos, setRepos]       = useState([]);
  const [page, setPage]         = useState(1);
  const [total, setTotal]       = useState(0);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState(null);

  const totalPages = Math.ceil(total / PER_PAGE);

  const fetchRepos = useCallback(async (p) => {
    setLoading(true);
    setError(null);
    try {
      // Get total count first (only on first load)
      if (p === 1 && total === 0) {
        const userRes = await fetch(`https://api.github.com/users/${GITHUB_USER}`);
        if (userRes.ok) {
          const user = await userRes.json();
          setTotal(user.public_repos ?? 0);
        }
      }

      // Busca mais repos para poder priorizar os com descrição
      const res = await fetch(
        `https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&direction=desc&per_page=30&page=1`
      );
      if (!res.ok) throw new Error('Falha ao buscar repositórios');
      const all = await res.json();

      // Prioriza repos com descrição, mantendo ordem de atualização dentro de cada grupo
      const withDesc    = all.filter((r) => r.description && r.description.trim() !== '');
      const withoutDesc = all.filter((r) => !r.description || r.description.trim() === '');
      const sorted = [...withDesc, ...withoutDesc];

      const start = (p - 1) * PER_PAGE;
      setTotal(sorted.length);
      setRepos(sorted.slice(start, start + PER_PAGE));
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, [total]);

  useEffect(() => {
    fetchRepos(page);
  }, [page]); // eslint-disable-line react-hooks/exhaustive-deps

  const goTo = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-10 bg-background" id="portfolio">
      <div className="max-w-5xl mx-auto px-6">
        <Title title="Projetos" />

        <p className="text-sm text-muted-foreground mb-8 -mt-2">
          Repositórios públicos mais recentes do GitHub.
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
            <p className="text-sm text-muted-foreground mb-3">{error}</p>
            <Button size="sm" variant="outline" onClick={() => fetchRepos(page)}>
              Tentar novamente
            </Button>
          </div>
        )}

        {/* Grid */}
        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {repos.map((repo, i) => (
              <ScrollReveal key={repo.id} delay={i * 40}>
                <div className="project-card group flex flex-col h-full rounded-xl border border-border bg-card p-4 hover:shadow-card transition-shadow duration-300">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <Link
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-tight line-clamp-1"
                    >
                      {repo.name}
                    </Link>
                    {repo.pushed_at && (
                      <span className="text-[10px] text-muted-foreground shrink-0 mt-0.5">
                        {new Date(repo.pushed_at).getFullYear()}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-muted-foreground leading-relaxed flex-1 mb-3 line-clamp-2">
                    {repo.description || 'Sem descrição.'}
                  </p>

                  {/* Footer */}
                  <div className="flex items-end justify-between gap-2 mt-auto">
                    <div className="flex items-center gap-3">
                      {repo.language && <LanguageIcon lang={repo.language} />}
                      {repo.stargazers_count > 0 && (
                        <span className="flex items-center gap-0.5 text-[10px] text-muted-foreground">
                          <Star className="w-2.5 h-2.5" />
                          {repo.stargazers_count}
                        </span>
                      )}
                      {repo.forks_count > 0 && (
                        <span className="flex items-center gap-0.5 text-[10px] text-muted-foreground">
                          <GitFork className="w-2.5 h-2.5" />
                          {repo.forks_count}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1.5">
                      {repo.homepage && (
                        <Link
                          href={repo.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Demo"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Globe className="w-3.5 h-3.5" />
                        </Link>
                      )}
                      <Link
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="GitHub"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        )}

        {/* Pagination */}
        {!loading && !error && totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-10">
            <Button
              size="sm"
              variant="outline"
              className="w-8 h-8 p-0 border-border"
              disabled={page === 1}
              onClick={() => goTo(page - 1)}
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </Button>

            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter((p) => p === 1 || p === totalPages || Math.abs(p - page) <= 1)
                .reduce((acc, p, idx, arr) => {
                  if (idx > 0 && p - arr[idx - 1] > 1) {
                    acc.push('...');
                  }
                  acc.push(p);
                  return acc;
                }, [])
                .map((item, idx) =>
                  item === '...' ? (
                    <span key={`ellipsis-${idx}`} className="px-1 text-xs text-muted-foreground">
                      …
                    </span>
                  ) : (
                    <button
                      key={item}
                      onClick={() => goTo(item)}
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
              size="sm"
              variant="outline"
              className="w-8 h-8 p-0 border-border"
              disabled={page === totalPages}
              onClick={() => goTo(page + 1)}
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </Button>
          </div>
        )}

        {/* Footer link */}
        <div className="mt-8 pt-6 border-t border-border">
          <Link
            href={`https://github.com/${GITHUB_USER}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Ver todos os repositórios no GitHub
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
