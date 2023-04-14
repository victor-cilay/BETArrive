<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_ed52ee5d116f476996d17ecdaa527208($e,$m){

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
return sg_load('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');
