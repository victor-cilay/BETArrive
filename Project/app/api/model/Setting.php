<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_8a11f9f3ae39c9d70da035cf0e1748dc($e,$m){

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
