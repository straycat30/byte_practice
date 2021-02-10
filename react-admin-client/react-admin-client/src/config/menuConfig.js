/*该文件用于遍历生成导航栏*/
import {
    ReadOutlined,
    IdcardOutlined,
    TableOutlined,
    UploadOutlined,
    HomeOutlined,
} from '@ant-design/icons';

const menuList = [{
    title: '我的主页',
    key: 'home',
    path: '/admin/home',
    icon: <HomeOutlined />
},
{
    title: '我的文章',
    key: 'article',     //SubMenu节点不需要路由的路径path
    icon: <ReadOutlined />,
    children: [
        {
            title: '文章列表',
            key: 'article-list',
            path: '/admin/list',
            icon: <TableOutlined />
        }, {
            title: '文章录入',
            key: 'article-luru',
            path: '/admin/luru/input',
            icon: <UploadOutlined />
        }]
}, {
    title: '个人资料',
    key: 'information',
    path: '/admin/info',
    icon: <IdcardOutlined />
}
]
export default menuList