'use client';
import { useState } from "react";
export default function Admin(){
 const [tab,setTab]=useState("Замовлення");
 const [blocked,setBlocked]=useState<string[]>([]);
 const [day,setDay]=useState("");
 return <main className="admin"><header className="admin-head"><a className="brand" href="/">Sweet Moments<small>ADMIN</small></a><a href="/">← До магазину</a></header><div className="admin-wrap"><p className="eyebrow">КЕРУВАННЯ МАГАЗИНОМ</p><h1>Адмін-панель</h1><div className="chips">{["Замовлення","Календар","Налаштування"].map(x=><button className={tab===x?"chip active":"chip"} onClick={()=>setTab(x)} key={x}>{x}</button>)}</div>{tab==="Замовлення"?<div className="admin-card"><b>Демо-замовлення</b><p>Після підключення бази тут будуть реальні замовлення та їхні статуси.</p></div>:tab==="Календар"?<div className="admin-card"><h2>Зайняті дні</h2><input type="date" value={day} onChange={e=>setDay(e.target.value)}/><button className="btn" onClick={()=>{if(day&&!blocked.includes(day))setBlocked([...blocked,day]);setDay("")}}>Позначити зайнятим</button>{blocked.map(d=><p key={d}>{d} <button onClick={()=>setBlocked(blocked.filter(x=>x!==d))}>Звільнити</button></p>)}</div>:<div className="admin-card"><h2>Налаштування</h2><p>Демо-режим. Підключення адміністраторів, платежів, Telegram та Viber буде виконано після налаштування серверної інфраструктури.</p></div>}</div></main>
}