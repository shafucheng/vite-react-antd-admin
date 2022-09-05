import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import 'dayjs/locale/zh-cn'
import { useRoutes } from 'react-router-dom'

import routes from '@/routes'

const App = () => {
  const element = useRoutes(routes)

  return <ConfigProvider locale={zhCN}>{element}</ConfigProvider>
}

export default App
