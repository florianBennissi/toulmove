import React from "react";
import { Image } from "semantic-ui-react";

const UserHeader = () => {
  return (
    <div className="userpage_header">
      <Image
        className="profile_picture"
        size="small"
        circular
        src="https://randomuser.me/api/portraits/women/20.jpg"
      />
      <div className="name">Cloé, 25 ans</div>
      <div className="citation">
        " La vie c’est comme une boîte de chocolats, on ne sait jamais sur quoi
        on va tomber. "
      </div>
    </div>
  );
};

export default UserHeader;
