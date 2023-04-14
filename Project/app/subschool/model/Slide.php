<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_36d5916d08fb4bebe7b4ed616fe1a8e5($e,$m){

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
