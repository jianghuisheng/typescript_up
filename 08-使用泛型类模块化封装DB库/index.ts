interface DBI<T> {
  add(info: T): boolean
  update(info: T, id: number): boolean
  delete(id: number): boolean
  get(id: number): any[]
}
export class MySqlDB<T> implements DBI<T> {
  constructor() {
    console.log('数据库建立连接')
  }
  add(info: T): boolean {
    console.log(info)
    return true
  }
  update(info: T, id: number): boolean {
    throw new Error('update')
  }
  delete(id: number): boolean {
    throw new Error('delete')
  }
  get(id: number): any[] {
    var list = [
      {
        title: '今天吃啥',
        desc: '青椒炒肉',
      },
      {
        title: '明天吃啥',
        desc: '凉拌黄瓜',
      },
    ]
    return list
  }
}
