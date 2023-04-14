<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_80b7eaedefe178fa54002ad22416f663($e,$m){

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
