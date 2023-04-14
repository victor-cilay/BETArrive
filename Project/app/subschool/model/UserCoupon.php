<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_30bde419674a65213299adc9c2b3d444($e,$m){

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
