<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_05614f95bfbf670edd5c63892862f273($e,$m){

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
