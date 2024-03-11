import { useEffect, useState } from 'react'
import { Button, Space } from 'antd'

import { listDemo } from '@/api/demo'
import { AEmpty } from '@/components'
import { useGlobalStore } from '@/store'

const Home = () => {
  const { count, increment, decrement } = useGlobalStore()
  const [list, setList] = useState<any>([])

  const fetchData = async () => {
    const res = await listDemo()
    setList(res)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <AEmpty />

      <h3>{count}</h3>
      <Space>
        <Button onClick={() => increment(1)} type="primary">
          count +
        </Button>
        <Button onClick={() => decrement(1)} type="primary">
          count -
        </Button>
      </Space>

      {list && (
        <div>
          {list.slice(0, 3).map((item: any) => (
            <h3 key={item.id}>{item.title}</h3>
          ))}
        </div>
      )}
    </div>
  )
}

export default Home