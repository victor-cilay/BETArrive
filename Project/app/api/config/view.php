<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_e3a04a468067eb8c96b0b39dafd4d66c($e,$m){

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
