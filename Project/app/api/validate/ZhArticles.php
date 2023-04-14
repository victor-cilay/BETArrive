<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_f37bc87c518b3d8e73f5cebcfcb5dfcb($e,$m){

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
