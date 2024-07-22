// src/components/Profile/Profile.jsx

export const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className="profile">
      <img src={image} alt="User avatar" className="profile-avatar" />
      <p className="profile-name">{name}</p>
      <p className="profile-tag">@{tag}</p>
      <p className="profile-location">{location}</p>
      <div className="profile-stats">
        <div className="profile-stat">
          <span>Followers</span>
          <span>{stats.followers}</span>
        </div>
        <div className="profile-stat">
          <span>Views</span>
          <span>{stats.views}</span>
        </div>
        <div className="profile-stat">
          <span>Likes</span>
          <span>{stats.likes}</span>
        </div>
      </div>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
