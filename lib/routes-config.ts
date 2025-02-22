// for page navigation & to sort on leftbar

export type EachRoute = {
    title: string;
    href: string;
    noLink?: true; // noLink will create a route segment (section) but cannot be navigated
    items?: EachRoute[];
    tag?: string;
};

export const ROUTES: EachRoute[] = [
    {
        title: "Getting Started",
        href: "/getting-started",
        noLink: true,
        items: [
            {title: "Introduction", href: "/introduction", tag: "New"},
            // {
            //     title: "Installation",
            //     href: "/installation",
            // },
            // {title: "Quick Start Guide", href: "/quick-start-guide"},
            // {
            //     title: "Project Structure",
            //     href: "/project-structure",
            // },
            // {
            //     title: "Components",
            //     href: "/components",
            //     tag: "Essential",
            //     items: [
            //         {title: "Stepper", href: "/stepper"},
            //         {title: "Tabs", href: "/tabs"},
            //         {title: "Note", href: "/note"},
            //         {title: "Code Block", href: "/code-block"},
            //         {title: "Image & Link", href: "/image-link"},
            //         {title: "File System", href: "/file-system", tag: "New"},
            //         {title: "Custom", href: "/custom"},
            //     ],
            // },
            // {title: "Themes", href: "/themes"},
            // {
            //     title: "Customize",
            //     href: "/customize",
            // },
        ],
    },
    {
        title: "React 的深入探索",
        href: "/dive-into-react",
        noLink: true,
        items: [
            {title: "Overview", href: "/overview"},
        ],
    },
    {
        title: "Taro 的尝试",
        href: "/start-with-taro",
        noLink: true,
        items: [
            {title: "Installation", href: "/installation"},
        ]
    },
    {
        title: "机器学习入门",
        href: "/machine-learning",
        noLink: true,
        items: [
            {title: "模型评估和选择", href: "/chapter-1"},
        ]
    },
    {
        title: "Vue.js 深入学习",
        href: "/dive-into-vuejs",
        noLink: true,
        items: [
            {title: "组件通信相关", href: "/part-1"},
            {title: "虚拟 DOM", href: "/part-2"},
            {title: "v-model 语法糖", href: "/part-3"},
        ]
    }
];

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
    const ans: Page[] = [];
    if (!node.noLink) {
        ans.push({title: node.title, href: node.href});
    }
    node.items?.forEach((subNode) => {
        const temp = {...subNode, href: `${node.href}${subNode.href}`};
        ans.push(...getRecurrsiveAllLinks(temp));
    });
    return ans;
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();
