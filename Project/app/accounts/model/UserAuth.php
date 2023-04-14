<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_5d1258872a65896917a9a3bf8763c725($e,$m){

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
