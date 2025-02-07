import PropTypes from "prop-types";
const Header = ({ title, userName, userStatus, profilePicture }) => {
  Header.propTypes = {
    title: PropTypes.string,
    userName: PropTypes.string,
    userStatus: PropTypes.string,
    profilePicture: PropTypes.string,
  };

  return (
    <div className="bg-primary-600 text-white font-primary">
      <div className="flex h-20 place-content-between container mx-auto">
        <h1 className="font-medium text-xl pl-24 left-0 place-content-center">
          {title}
        </h1>
        <div className="flex gap-3">
          <div className="place-content-center w-12">
            <img src={profilePicture} alt="Profil" className="rounded-full" />
          </div>
          <div className="place-content-center">
            <h1 className="font-semibold">{userStatus}</h1>
            <p className="text-xs">{userName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
