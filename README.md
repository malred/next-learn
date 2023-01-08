# 部署在vercel(需要梯子)


https://next-learn-malred.vercel.app/

# pages下的目录结构会映射为url

## 如 目录结构如下

pages/  
  -- index.js  
  -- user.js  
  test/  
    -- index.js  
    -- learn.js  

## 对应url

/ -> index.js  
/user -> user.js  
/test -> test/index.js  
/test/learn -> test/learn.js  

# 生产环境(需要先build)
npm run start

# 打包
npm run build

# 本地运行,开发环境
npm run dev
