
import React from 'react';
import { Link } from 'react-router-dom';
const DownloadButton = ({ href, icon, label, downloadIcon }) => {
  return (
    <div className="widget-sidber-download-button">
      <Link className="active" to={href} style={{textDecoration:'none'}}>
        <i className={icon}></i>
        {label}
        <span>
          <i className={downloadIcon}></i>
        </span>
      </Link>
    </div>
  );
};

export default DownloadButton;
