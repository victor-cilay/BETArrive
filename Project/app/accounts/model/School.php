<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_7a4765f24c22e94da7376b3af94f36ce($e,$m){

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
