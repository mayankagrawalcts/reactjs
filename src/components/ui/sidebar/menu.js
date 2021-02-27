import TrendingUpOutlinedIcon from "@material-ui/icons/TrendingUpOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";

export const menu = [
    {
        icon: "home",
        title: "Home",
        to: "/services",
        "id": "dashboard",
        items: []
    },
    {
        icon: "localLibrary",
        title: "Education",
        items: [
            {
                title: "Technical Analysis",
                items: [
                    {
                        "id": "dashboard",
                        "icon": "dashboard",
                        title: "The Dow Theory",
                        to: "/services",

                    },
                    {
                        title: "Charts & Chart Patterns",
                        to: "/home"
                    },
                    {
                        title: "Trend & Trend Lines",
                        to: "/aboutus"
                    }
                ]
            },
            {
                title: "Fundamental Analysis",
                items: [
                    {
                        title: "The Dow Theory",
                        to: "/thedowtheory"
                    },
                    {
                        title: "Charts & Chart Patterns",
                        to: "/chart"
                    }
                ]
            },
            {
                icon: <TrendingUpOutlinedIcon/>,
                title: "Options",
                to: "/services",
            },
            {
                icon: <DescriptionOutlinedIcon/>,
                title: "Blog",
                to: "/services",
            }
        ]
    }];