<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_0bc740c1af0a38b556f25f57a7235718($e,$m){

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