import TrendingUpOutlinedIcon from "@material-ui/icons/TrendingUpOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";

export const menu = [
    {
        icon: "home",
        title: "Home",
        to: "/services",
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
                    },
                    {
                        title: "Support & Resistance",
                        to: "/sandr"
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
                    },
                    {
                        title: "Trend & Trend Lines",
                        to: "/trendlines"
                    },
                    {
                        title: "Support & Resistance",
                        to: "/sandr"
                    }
                ]
            },
            {
                title: "Elliot Wave Analysis",
                items: [
                    {
                        title: "The Dow Theory",
                        to: "/thedowtheory"
                    },
                    {
                        title: "Charts & Chart Patterns",
                        to: "/chart"
                    },
                    {
                        title: "Trend & Trend Lines",
                        to: "/trendlines"
                    },
                    {
                        title: "Support & Resistance",
                        to: "/sandr"
                    }
                ]
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
];
