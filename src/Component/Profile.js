import React from "react";
import PropTypes from "prop-types";

const Profile =({fullName, bio, profession,image,handleName}) =>{
    return(
<div>
    <div><span>FullName:{fullName}</span></div>
    <div><span>Bio:{bio}</span></div>
    <div><span>Profession:{profession}</span></div>
    <img src={image} alt="myImage"></img>
    <div><button onClick={() =>handleName(fullName)}>clik </button></div>

</div>
);};
Profile.propTypes={
fullName: PropTypes.string,
bio: PropTypes.string,
profession: PropTypes.string,
image: PropTypes.string,
handleName: PropTypes.func
};
export default Profile;
   
