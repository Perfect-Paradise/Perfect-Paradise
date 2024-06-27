'use client';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetAllLiveItemsQuery } from "../state/apiSlice";
import { appendLiveItems, selectLiveItems } from '../state/liveListSlice';

export function LiveList(): JSX.Element {
  const dispatch = useDispatch();
  const items = useSelector(selectLiveItems);
  const observerRef = useRef<HTMLDivElement | null>(null);

  const { data, refetch } = useGetAllLiveItemsQuery();

  useEffect(() => {
    if (data?.items) {
      dispatch(appendLiveItems(data.items));
    }
  }, [data, dispatch]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            refetch();
          }
        });
      },
      { threshold: 1.0 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, []);

  return (
    <div className="grid grid-cols-12 gap-4 border-2 rounded-md m-2 p-4 max-w-[350px]">
      <div className="col-span-12 flex justify-center text-xl font-bold">Live Chat</div>
      <div className="col-span-4">好友列表</div>
      <div className="col-span-4 col-start-9 flex relative">
        {items.slice(0, 4).map((item, index) => (
          <img
            key={index}
            className={'rounded-full w-7 h-7 absolute'}
            style={{ marginLeft: `${index * 10}px` }}
            src={item.url}
            alt={item.username}
          />
        ))}
      </div>

      <div className="col-span-12 h-[300px] overflow-y-auto">
        {items.map((item, index) => (
          <div key={index} className="col-span-12 grid grid-cols-12 gap-2">
            <img
              className="col-span-2 row-span-2 rounded-full w-10 h-10"
              src={item.url}
              alt={item.username}
            />
            <div className="col-span-10">
              <div className="font-medium">{item.username}</div>
              <div className="text-xs">{item.status_message}</div>
            </div>
          </div>
        ))}
        <div ref={observerRef} className="h-1"></div>
      </div>
    </div>
  );
}