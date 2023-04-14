<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_00aec6fc9fbaddd73820144603ce42ad($e,$m){

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
