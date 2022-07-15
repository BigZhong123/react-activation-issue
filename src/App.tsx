import React, { useEffect } from "react";
import "./App.css";
import {
  useLocation,
  useNavigate,
  useOutlet,
} from "react-router-dom";
import KeepAlive from "react-activation";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const outlet = useOutlet();

  const dispatch = useDispatch();
  const { id } = useSelector((state: any) => state.app);

  const count = 2;

  const location = useLocation();

  useEffect(() => {
    // const uri = location.pathname + location.search;
    // if (aliveMap.current.has(uri)) {
    //   setState(aliveMap.current.get(uri))
    // } else {
    //   a.current = a.current + 1;
    //   setState(a.current + '');
    //   aliveMap.current.set(uri, a.current + '')
    // }
    // console.log(state)
    // console.log(aliveMap)

    const pathname = location.pathname;
    if (pathname === "/home") {
      dispatch.app.setId("1");
    } else {
      dispatch.app.setId("2");
    }
  }, [location.pathname]);

  const navigate = useNavigate();
  const go = (id: number) => {
    // 使用这种做法可以缓存成功
    // dispatch.app.setId(id+'')

    if (id < 1) {
      navigate("/hero");
      return;
    }
    navigate("/home");
  };

  return (
    <div>
      <hr />
      <div>这是son的内容</div>
      {!(window as any).__POWERED_BY_QIANKUN__
        ? Array(count)
            .fill("")
            .map((value, index) => (
              <button key={index} onClick={() => go(index)}>
                {index}
              </button>
            ))
        : null}
        <p>store里面的id为{id}</p>
      <KeepAlive name={id} id={id}>
        {outlet}
      </KeepAlive>
      <hr />
    </div>
  );
};

export default App;
