<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_dc57b1e3512a369d005f1b5867987273($e,$m){

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
