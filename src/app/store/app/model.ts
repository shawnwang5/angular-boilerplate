export interface IAppState {
    menus: any[]
}

export const initialState: IAppState = {
    menus: [
        {
            text: '简单UI组件',
            path: '/simpleUI',
            type: 'level1',
            isFolded: false,
            icon: 'icon-component',
            children: [
                { text: '表格', path: '/simpleUI/table', type: 'level2' },
                { text: '表单', path: '/simpleUI/form', type: 'level2' }
            ]
        },
        {
            text: '登录',
            path: '/account/login',
            queryParams: { pageType: 'sideMenu' },
            type: 'level1',
            isFolded: true,
            icon: 'icon-login'
        }
    ]
}
