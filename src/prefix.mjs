const s={lightGallery:null,lgData:null,lgModules:null},window=new Proxy(window,{get:(t,p)=>(p in s?s:t)[p],set:(t,p,v)=>((p in s?s:t)[p]=v,true)});