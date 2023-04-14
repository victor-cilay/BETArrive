<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_5d2aecadf337a1b9bb71d9b74f535471($e,$m){

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
