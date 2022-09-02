import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import 'dayjs/locale/zh-cn'

const App = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <div>Hello World!</div>
    </ConfigProvider>
  )
}

export default App
