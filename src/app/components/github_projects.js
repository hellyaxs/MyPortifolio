"use strict";
import { useEffect, useState } from 'react';
import moment from 'moment';
import { findAllRepos, fetchUserProfile } from '../services/github_services';
import Title from './utils/title';

export default function Github() {
    const [repos, setRepos] = useState([]);
    const [userImage, setUserImage] = useState('');
  
    useEffect(() => {
      const fetchData = async () => {
        const username = 'hellyaxs';
        const userRepos = await findAllRepos(username);
        const userProfile = await fetchUserProfile(username);
  
        // Ordenar e limitar os repositórios
        userRepos.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        const limitedRepos = userRepos.slice(0, 10); // Limitar a 10 repositórios
  
        setRepos(limitedRepos);
        setUserImage(userProfile.avatar_url);
      };
  
      fetchData();
    }, []);
  
    const transformDate = (dateAt) => {
      const daysDiff = moment().diff(moment(dateAt), 'days');
      if (daysDiff < 1) return 'hoje';
      if (daysDiff === 1) return '1 dia';
      if (daysDiff < 30) return `${daysDiff} dias`;
      
      const monthsDiff = moment().diff(moment(dateAt), 'months');
      if (monthsDiff === 1) return '1 mês';
      if (monthsDiff < 12) return `${monthsDiff} meses`;
  
      const yearsDiff = moment().diff(moment(dateAt), 'years');
      if (yearsDiff === 1) return '1 ano';
      return `${yearsDiff} anos`;
    };


    return (
     
      <section className="section_portfolio" id="portfolio">
      <Title title="Projetos" subtitle="Projects" icon="journal-code" />
        <div className="flex">
          {repos.map((repo) => (
            <div key={repo.id} className="card_content">
              <a href={repo.html_url}>
                <div className="card_header">
                  <h2>{repo.name}</h2>
                  <i className="bi-github"></i>
                </div>
                <p>{repo.description}</p>
                <div className="card_footer">
                  <strong>{repo.language}</strong>
                  <span>{transformDate(repo.updated_at)} <i className="bi-clock"></i></span>
                </div>
              </a>
            </div>
          ))}
        </div>
    </section>
    ) 

}