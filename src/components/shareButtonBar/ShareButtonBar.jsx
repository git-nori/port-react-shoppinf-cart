import React from 'react'

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  PinterestShareButton,
  PinterestIcon,
} from 'react-share'

const ShareButtonBar = () => {
  const currentPath = window.location.href
  return (
    <>
      <FacebookShareButton url={currentPath} className="mr-2  border p-1">
        <FacebookIcon size={20} round />
        <span className="small ml-2">シェア</span>
      </FacebookShareButton>
      <TwitterShareButton url={currentPath} className="mr-2 border p-1">
        <TwitterIcon size={20} round />
        <span className="small ml-2">ツイート</span>
      </TwitterShareButton>
      <PinterestShareButton url={currentPath} className="mr-2 border p-1">
        <PinterestIcon size={20} round />
        <span className="small ml-2">ピンする</span>
      </PinterestShareButton>
    </>
  )
}

export default ShareButtonBar