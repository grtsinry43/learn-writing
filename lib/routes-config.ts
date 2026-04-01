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
            {title: "Introduction", href: "/introduction"},
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
        title: "数据结构与算法",
        href: "/data-structure-and-algorithm",
        items: [
            {title: "Introduction", href: "/", tag: "New"},
            {title: "Linked List", href: "/linked-list", tag: "New"},
            {title: "Binary Tree", href: "/binary-tree", tag: "New"},
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
            {title: "vue2 响应式原理", href: "/part-4"},
        ]
    },
    {
        title: "CC Learn Docs",
        href: "/cc-learn-docs",
        noLink: true,
        items: [
            {title: "00 Progress Tracker", href: "/00-progress-tracker"},
            {title: "01 Entrypoint Startup Architecture", href: "/01-entrypoint-startup-architecture"},
            {title: "02 Command System Architecture", href: "/02-command-system-architecture"},
            {title: "03 Query Engine And Turn Loop", href: "/03-query-engine-and-turn-loop"},
            {title: "04 Tool Framework And Orchestration", href: "/04-tool-framework-and-orchestration"},
            {title: "05 Task Framework And Background Jobs", href: "/05-task-framework-and-background-jobs"},
            {title: "06 State Repl Rendering", href: "/06-state-repl-rendering"},
            {title: "07 Context And Memory System", href: "/07-context-and-memory-system"},
            {title: "08 Mcp Plugins Skills Ecosystem", href: "/08-mcp-plugins-skills-ecosystem"},
            {title: "09 Permission And Sandbox Boundary", href: "/09-permission-and-sandbox-boundary"},
            {title: "10 Api Model Budget Compact", href: "/10-api-model-budget-compact"},
            {title: "11 Remote Bridge Multi Endpoint", href: "/11-remote-bridge-multi-endpoint"},
            {title: "12 Cross Cutting Infrastructure", href: "/12-cross-cutting-infrastructure"},
            {title: "13 Full Src Coverage Index", href: "/13-full-src-coverage-index"},
            {title: "14 Top 10 Reusable Patterns And Templates", href: "/14-top-10-reusable-patterns-and-templates"},
        ]
    },
    {
        title: "Jetpack Compose",
        href: "/jetpack-compose",
        noLink: true,
        items: [
            {title: "叙述", href: "/overview"},
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
