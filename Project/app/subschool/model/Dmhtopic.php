<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_6a5cb0af9974bc8c9bb0b62dbc633485($e,$m){

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
