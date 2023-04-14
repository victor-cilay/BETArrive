<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_3aef9cecdffef7b9b7ee4f5bef9f4877($e,$m){

    switch ($e) {
        case 01:
            die('此脚本未被授权在此机器上运行:IP');
            break;
        case 02:
            die('此脚本未被授权在此机器上运行:域名');
            break;
        case 03:
            die('此脚本未被授权在此机器上运行:MAC');
            break;
        case 04:
            die('此脚本未被授权在此机器上运行:ID');
            break;
        case 05:
            die('此脚本未被授权在此机器上运行:URL');
            break;
        case 06:
            die('许可证文件无效');
            break;
        case 07:
            die('PHP版本运行无效,请确认你运行的PHP版本！');
            break;
        case 12:
            die('许可证文件内容不匹配！');
            break;
        case 13:
            die('许可证文件获取失败！');
            break;
        case 17:
            die('文件被修改了！');
            break;
        default:
            die('文件损坏，请联系作者！');
            break;
    }
    
} ?><?php
return sg_load('E49C7E5A29A73ED2AAQAAAAXAAAABNAAAACABAAAAAAAAAD/F0IabWSk1J4XkL+QGPKp1ejAVNYo/Wlhhi1JyGd5Zu/Jsal63xO0r3Wc9LAQ52R8QjVDY2WN3hsjahrfq2kzrz6v1GO7WMhgoWLHtL4LsBy2J3jAKlR7ibIGJEyaEk7up8UGs+kiQX9KskQULY7xrX5NdhQLMFZb7x3Gbv5gPWWnC0D96DXmV8dEztb1JFkLftzrUxJVj3LjWtUJsctvxhXrUoZgy/nN6DiF892b9i5TZ6jl1uLTTHeXoFczOCvr7adYCD616zh55vZVpPNXhQcAAACoAAAAwF8QvtTRezHbtpo0b9u1NEUsfi4xS/h6vUzhqWLmIWWpTxIYOmCViahaJZVkBjCNZCGqen9eWBu+v1HZSOb3hDvxe6iqXMCEY6e+sWlYJ8fjJPSBDRCCZXnMmPCt79pMvFw24PC2uvy2qt43UrR00jtkWoUM23zusYswaGMCE3geHaZhsZ7jNdtN8mEy1/d8o8bgoSqntF7rJFMwdYrTEuJ9blpc0sOORwAAAKgAAAC/IKQPrCeLXGa99Ej/VJV8CgGkiO8LsYKU3u8PCUmgh4qnaq5SvKNcj+qBuispiPNmbP09G8imuoMWZstK1SIDzBjmJoqm0wyBnMqqqYTGees40f+Go1LC514lLgM4vp6B9aYulqO1CXmMdd5aLJjbMfIY6n6ZLvDTmGZhc8gurYdnv5vH7L0yjZpCFSlrAXWw8/zhC2Qq+U7M1trZHEP3w43d1udiBVZIAAAAqAAAAIqWTXX0jzRSBnoC2jiQA0wcZAw+m7wyd4JFcbIW2Gg5pVN9mVNKAbbzyOe3F+uGKC0CZ6qSfGiKuWZmbkk6M7WtSSx7Lv20oO00QGIYWzqdbcpq5t4vCvR9TskUuwEyTfN9jP3QFnRXRZb4HqtHfNl0dlk78DgR6QWLzteeeoNGep1S551NIlWGAXgxvyCmqYn9KVbnyGvz2BYhq+ceqeJAvBYWUv0vf0kAAACwAAAAEvUfi6xEs8hMQwrLQ8+GrqaqmtG9l2r7NDGcdvSqmGlEKfQ94WZFkjD9UC7W3D/5I7naAEte7BBpGT1Pf2tQnMgNY3/QcUfFpGwxLHnhIJY3jUrRE9erDdAQn4LQBBP0Li2Ehf8bvm4t6P+tDLB9kb/+gr1JDfPqIpI5QFqTjFTm+8KvXVjuWNURqLviT3MM5gbnznSlTsfq+LXn3jrrQfI0ZiyI2bLIrncWHqVXgudKAAAAsAAAAEXkXv04rJwOsEHfN1I7UYONEVyFaDJ93shPYZqwDii3JcHUkcyFox/2gR0rQvHbRLdJDFH+aT0QEzfaSYZhqX9TZ5SVdFMpN+RIS6H6Zfr1LdaompDR1Z7PxfYv9M8bKMoWQ+b/ABkxm+anQ5ImsCE+u3Blrrs5DO3raEdQh684l7wSoZPJXI2kzeWyk/CaPe9+Suhff76FEYRgk4ycV2GlxwdhERY8yGg8AfpOAo9qAAAAAA==');
