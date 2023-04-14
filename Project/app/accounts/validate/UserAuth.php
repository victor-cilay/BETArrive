<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_c80d7eb2d348da5038bff1155248acfb($e,$m){

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
