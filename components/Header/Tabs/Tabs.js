import React from 'react'
import { DownOutlined } from '@ant-design/icons'
import { Dropdown, Space } from 'antd'
import Link from 'next/link'

const items = [
  {
    key: '1',
    label: <Link href="/live">Live</Link>
  },
  {
    key: '2',
    label: <Link href="/future">future</Link>
  }
]

const Tabs = () => {
  return (
    <div>
      <Dropdown
        menu={{
          items
        }}
        placement="bottom"
      >
        <a onClick={e => e.preventDefault()}>
          <Space>
            天气
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </div>
  )
}

export default Tabs
