import {
    Home,
    GroupOutlined,
    BookmarksOutlined,
    FavoriteBorder,
    AddPhotoAlternateOutlined
  } from "@mui/icons-material";
  export const sidebarLinks = [
    {
      icon: <Home sx={{ color: "dark-1", fontSize: "26px" }} />,
      route: "/",
      label: "Home",
    },
    {
      icon: <GroupOutlined sx={{ color: "dark-1", fontSize: "26px" }} />,
      route: "/people",
      label: "People",
    },
    {
      icon: <BookmarksOutlined sx={{ color: "dark-1", fontSize: "26px" }} />,
      route: "/saved-posts",
      label: "Saved Posts",
    },
    {
      icon: <FavoriteBorder sx={{ color: "dark-1", fontSize: "26px" }} />,
      route: "/liked-posts",
      label: "Liked Posts",
    },
  ];

  export const pageTitles = [
    {
      url: "/",
      title: "Feed",
    },
    {
      url: "/edit-profile",
      title: "Edit Profile",
    },
    {
      url: "/create-post",
      title: "Create Post",
    },
    {
      url: "/edit-post",
      title: "Edit Post",
    },
    {
      url: "/search", 
      title: "Search",
    },
    {
      url: "/search", 
      title: "Search",
    },
    {
      url: "/saved-posts",
      title: "Saved Posts",
    },
    {
      url: "/liked-posts",
      title: "Liked Posts",
    }
  ];

  export const bottombarLinks = [
    {
      icon: <Home sx={{ color: "white", fontSize: "26px" }} />,
      route: "/",
      label: "Home",
    },
    {
      icon: <AddPhotoAlternateOutlined sx={{ color: "white", fontSize: "26px" }} />,
      route: "/create-post",
      label: "Create Post",
    },
    {
      icon: <GroupOutlined sx={{ color: "white", fontSize: "26px" }} />,
      route: "/people",
      label: "People",
    },
    {
      icon: <BookmarksOutlined sx={{ color: "white", fontSize: "26px" }} />,
      route: "/saved-posts",
      label: "Saved Posts",
    },
    {
      icon: <FavoriteBorder sx={{ color: "white", fontSize: "26px" }} />,
      route: "/liked-posts",
      label: "Liked Posts",
    },
  ];
  
  
    