const s={lightGallery:null,lgData:null,lgModules:null},_window=window,window=new Proxy(_window,{get:(t,p)=>(p in s?s:t)[p],set:(t,p,v)=>((p in s?s:t)[p]=v,true)});