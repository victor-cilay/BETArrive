<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_e85026464331bedd22b1ae6ba802c33e($e,$m){

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
