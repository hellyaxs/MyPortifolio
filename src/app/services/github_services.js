export const findAllRepos = async (username) => {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    const repos = await response.json();
    
    return repos;
  };
  
export const fetchUserProfile = async (username) => {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const userProfile = await response.json();
  
    return userProfile;
  };
