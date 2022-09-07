import { DownOutlined } from '@ant-design/icons'
import ProLayout, { MenuDataItem } from '@ant-design/pro-layout'
import { Avatar, Dropdown, Menu, Space, Typography } from 'antd'
import { Suspense } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

import { APP_TITLE } from '@/config'

const Layout = () => {
  const location = useLocation()

  return (
    <ProLayout
      className="!min-h-screen"
      locale="zh-CN"
      layout="mix"
      logo={null}
      title={APP_TITLE}
      fixedHeader
      fixSiderbar
      location={{
        pathname: location.pathname,
      }}
      route={{
        routes: [],
      }}
      menuItemRender={(item: MenuDataItem, dom: React.ReactNode) => (
        <Link to={item.path ?? '/'}>{dom}</Link>
      )}
      rightContentRender={() => (
        <Space>
          <Dropdown
            overlay={
              <Menu
                items={[{ label: '菜单', key: 'menu' }]}
                onClick={(e) => {
                  switch (e.key) {
                    default:
                      break
                  }
                }}
              />
            }
          >
            <div className="flex items-center cursor-pointer">
              <Avatar>用</Avatar>
              <Typography.Text className="!text-white px-2">
                用户名
              </Typography.Text>
              <DownOutlined />
            </div>
          </Dropdown>
        </Space>
      )}
    >
      <Suspense>
        <Outlet />
      </Suspense>
    </ProLayout>
  )
}

export default Layout
