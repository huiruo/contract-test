import React from "react"
import { useRouter } from 'next/router';

const routers = [
  "counter",
  "test1",
  "test2",
  "test3",
  "test4",
  "test5",
  "test6",
  "test7",
  "test8",
  "test9",
  "test10",
  "test11",
  "test12",
  "test13",
  "test14",
  "test15",
  "test16",
  "test17",
  "test18",
  "test19",
  "test20",
  "test21",
  "test22",
  "test23",
  "test24",
  "test25",
  "test26",
]

export function Navigation() {
  const router = useRouter();

  const onNavigateTo = (name: string) => {
    router.push(name);
  };

  return <div>
    <h2>Home</h2>
    {
      routers.map((router) => {
        return <div key={router}>
          <button onClick={() => onNavigateTo(router)}>Go to {router}</button>
        </div>
      })
    }
  </div>
}