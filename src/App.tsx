import React, { useEffect } from "react";
import "./App.css";
import { useLocation, useNavigate, useOutlet } from "react-router-dom";
import KeepAlive from "react-activation";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const outlet = useOutlet();

  const dispatch = useDispatch();
  const { id } = useSelector((state: any) => state.app);

  const location = useLocation();

  useEffect(() => {
    // 点击时候设置id的时候打开这个 初始化设置 可以缓存成功
    dispatch.app.setId(location.pathname);
  }, []);

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

    dispatch.app.setId(location.pathname);
  }, [location.pathname]);

  const navigate = useNavigate();
  const go = (url: string) => {
    // 使用这种做法可以缓存成功
    // dispatch.app.setId(url)

    navigate(url);
  };

  return (
    <div>
      <hr />
      <div>这是son的内容</div>
      {!(window as any).__POWERED_BY_QIANKUN__ ? (
        <div>
          <button onClick={() => go("/home")}>home</button>
          <button onClick={() => go("/hero")}>hero</button>
        </div>
      ) : null}
      <p>store里面的id为{id}</p>
      {/* 要做缓存刷新与清空 需要复制name与id */}
      <KeepAlive name={id} id={id}>
        {outlet}
      </KeepAlive>
      <hr />
    </div>
  );
};

export default App;
