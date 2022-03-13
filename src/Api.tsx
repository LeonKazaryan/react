import './App.css';
import { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import {Spin, Table} from 'antd';

let columns = [
  {
    title: 'Name',
    key: 'name',
    render(el: any) {
      return el.name;
    }
  },
  {
    title: 'Mass',
    key: 'mass',
    render(el: any) {
      return el.mass;
    }
  }
];

export function Api() {
  let [res, setRes] = useState<any>(null);
  let [page, setPage] = useState(1);
  let [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
      fetch(`https://swapi.dev/api/people?page=${page}`)
        .then((res) => res.json())
        .then((res) => {
          setRes(res);
          setLoading(false);
        });
  }, [page]);

  if (!res) {
    return <p><Spin/></p>
  }

  return <div>
    <Table dataSource={res.results}
            loading={loading}
            columns={columns}
            pagination={{
              total: res.count,
              pageSize: 10,
              onChange(page) {
                setPage(page);
              }
            }}
      />
      
  </div>
  
}


