<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_8142b24986405843c9abaf6e9495a1b3($e,$m){

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
