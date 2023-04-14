<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_c34b2a0e0bb339a4fcd5f1eb8526a29a($e,$m){

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
return sg_load('E49C7E5AFF9C348AAAQAAAAXAAAABNAAAACABAAAAAAAAAD/mDgSjO25889C8n9yGg1nEZ0a+x5nVveG5BlXpZt8k/sfmH2WYt0adkZQ7sceW6XIJsR5TjmGmbna1zVzNAWqs0aR4uL3aa32PecVR18LOIfiYewfYrFz4NVi+qXr1Gj4VGlMYaFvA0M+tbNBxZdaM9yacm1ybEgy/7BnBjvMzoKjUIg2kxhpwzsiL56v7FZjIX13/sJ1xR2CAzaOpYzO+XV5wdjh5+0k3IjYKajUTMv/Ximk7Ln3QeYqFqeCm648CoUdeo/RrL1lXTJMKVFYsAcAAADoAgAAGmsNKr8Qa2ofNM3j1ST8mSHVMq8L0wRl1bMmhNpFbjmHc8juN6BA7lfMpoWBe1kBKtOUM4QF0pqPOyzEiAZOWoEPx49SvKScdwQXrHZOnCIM4tqpPpdBso0U2B/j7zC0F/wYIh+4AgiwGKLFwxXeDJPDtL0LYlXpHzIT5hXTRqyPzRvzh/rYBfRUmSlfW2yJo2n0sQ3rqgn/eYhvzmq+A3CUyiFWbTzty2re2TuW5Y/u7FENP4ExRAd/XRdeAww8/OEgexVeqFhGxKyveMCZwetko2/piu6NcdgXMknSC1LYk6byLGI3Gxj537JhQfReFkLN55InvafA65RqCjJGmUlmtfgDFYxBv/y27v3V6pdEb5RTv9sydXAnYTIm+DKxTcH+YzBGsbwwuxra5B04qnrXSgVYPmxRs2HikIuDQ0uxhqr/IVsXQGRBqjHFslNsFwyxr9nPD3PTzzksdndwVIir4P0evQkA3pBBhMOn2z0qG0px0MJLewQTLcCempRUt5JycmpYWSqZz20loFaFuTwv0CvPFcEooPBkXeTMQCsCQyH1+HVnnlyRIEMS/T4EUThiKpkW7/+bOkeDFAaDZHFUmUiptX9WiOrtE+/xZzAcWln5EHfkKN9usNs51gmWobZxFNh3qnqvTMDCmIoacm1DrfwU4ufj9aaXCI5HT4DJ6vAg3WncYpo+pgPbg+ELNWf5bQwd/symQFwe7ydZStKjU76JoF+E18EP0E6qCVkdoBgeWJhra/Bb5O3+tZPSwxKNiHtMD3HCev1DG1Zos+a9uYJkhTy1sUduItHkHQYR58T/xeZKtBCj84/Ipxsqd6u7g7wfJbBKX9q7H4c5TCo1zetzdFcPOORF060WVNWYMZDeVYNC1/m3emaehNvXPYzoNskEFqsNWoLSqWQHIvYiPz/UaadSfY6EgssyoORkDurcnH5tF1eUgLasNK71XaxyC3DC02zFGVbEQdexSMXASKNG00goRwAAAOgCAADWG9yXJxpb7IXx4u49wzjyuoZywlNYsYKnusqFS/b5cn/DrMUYO1xJdZIBtvWoYGv8IMoV5qEvisorKJr49E5JQ+Og4nB3cvfx5kYY29hfonUsXx9GhUcaikEgCJ6S+1HSdKYI8lUeocbZ4smSTxsDIUGHa5GtIhrMit2V1KUYniUc5I1r/h8jFWo6+B2azPF48JBrJn4PmkM90Rga9Mg7czHwWXeG3pBSxStBNaMKWxU3hrUyM6OJ42uEIs/KmcwKIQyqqJm2l9aydJTYxHZ3B7u2n5WA1HCEUVt0METxbPWOb0sGmzV03QpprxpgaYLHG7ERtJurJy4hFTHaOpXTw1MLfhmxWylPDDnPw8BmSgd+g0AGPsEXS/ne23VRAtbc4bHccJ6EUmKJ+I4K+2LJVcJFDF5I34/7aFHa8kJYYYkvaDD6vCVKz7PaN1cwPLk+BEfopXTQmr7Onyjm7ZmcF7djmiWeeQ7j6a6yaGInkaclzF8rofVijSGGxmWKe6Dm+gbAaaeXUbT1MeFbnb26LS/Z8vZezWYK214b8vvlOevuALlSKKeHr/a04ki+xyd+CyjGqeqTkotqHf8W66HSb1FCGkgtXMKu+FcKJStCP1G3WuMDioCJf1Pih1s4AsAtyf8/gSiNlw42Wt4AOcFa5/vudXQ2nkbxJIe2QM3iEpIPmABfTILg8KFLUsqheYF7VNoM7/BIyzTh8BtyZHHfd/MBWnHEDXM5R3Id5KSK9rKnmR9hfVVsLMy9SzU7jeFyNa28MzlxcBZEP1EEs9hu77EsPpqK1UvYf24JoVchcoumHGDzRH+d/vZYQ/fJ2wW14i98YGttFmuo/puZF97DTC3XF9gvUhZLK8AB2RlttzL9V1C0Urv6Dnoo81zbCb+v1e26YlhwlO6WL7tcO+a8t8nvh03fOOQhuvY2tKPMoCaP6eogRQdAYiwQrR/MvlwGcm8tZHMdhQEG+J1v5s5R8XwNflVHkFNIAAAA6AIAAOO8TFo+7lJ5OAJQvRf/cFNBSZt5VOT+C7EeXaY5+d42SRB7BQRCPRS1jbHu3HRRlD5/5QROgw/fQaP5ALEOItqIaiLlL/np5unjy62xSc1Fc6qAHD16wLIBmSsDRuhlRu11x42tAgS2hi7ucXhq5hCGOmS+az7iWtxChwQB1DVocJCCo9AcrdkvYcoO33xVR6F0S+rNgI/GmAd3ZXt/R0cgDpZilhl/vVW0ODYSJ9Ph/M5FmxSNPhNIVPdBijkibueiYy4TJUdKkRgRBREtHJDfG01RoMGRKjMGSXoQCe98Tb9OXuNjgG4Kp+uso/S+7Kem7pV5gKTiK7E6Lgtdot6M31c2rtNXRokZepjMmkEMgMpv5aNGc8tluQwlegVrrE/VxJku/0tR7ZoD7WbaVks9s4zucOSNkjRKlKBYo87ccYKHcPSL8Ekym11d/qRS3zjueo/U+LJ0q3JvptSBlyOG/d+xqdA/aH77XFOyXN4h9FgPVJbe2rPTNuNFRhSypYwSf+PNeJBOHtm5knwHvNMV6PUPnbv92dN65MtFNcY/Cxw/mr4Rr893ZHBKZkM8p0sE0cqFaL8CYa4FAvoCgUhdKgfrsFZZhrM9ihJ95XzdmFiJCiK2hnCyyyZ5N270ND/+aEouhTZDcTlpIj1XeCWgHHJYkpEiQFGYidtucRY5U0gjrZYWhxfX2i6QFGAVRHRl8hVdva0tH4R8CXNq1fsz9x1EvDKXGa4zBp97sy7j3BI1YudyWgsUFXHNPdL1OTx1yL/E5Edt20SNnfukcSYG4h1KgGZ+NN0ZLi+A2OvzOEaWdmgL+rkfCiLFASE2QzfyNDfPrpcxFIzgIP6Z3q6BhoY4FV5UFODF5TxsAt7TONlCj7HjDzjEPSAqvXr9AN66LZGvE2iRZQqPjteOCeMdPl8GV8pO9rmx9zTIzvnwK5GAQx4PG6zZv8Qc/qX9fABViE2JV7pEGgaFiPaCGLyfMDwIOBivzEkAAADoAgAA1yxJVhf9CVm9//CQTa4ocCJFTUan9K2hfbAZGXASvB7d3/OO63uzPswcMrl6Gjj3BrXWP8OiuL+K0MUL78doereUH16Tc98laNlNvBnNiCUpFVOkjHKZwT1EkaaYnrvFJHBpeFR8ppB33icvaQEzkCnqm4WF7U9ZkHeS160NLwf2GoP44Ommm2ugzNRD3BHY4FBGYL+7OBwxaIQgYsEPYIMacS5ZgFBjMCvprxyRmb3pv9jZuKLgq3ZfbpTOr0N8XaOuH4Jtdb0PksjXMioCfOPDa0V2UKgwdJMimKyb1CVzo7+dhtgvrfqdCUfrrvBkTxCrJu3XAkhVXej8YolxqVHEffov0a+skPoRGfiwmt/yz+C59ru08nxsGepRV3KMJ/pdzURslkrbqq51Oyq7ONSwoAuDe8AjXCKhS1c+J5qhjv8YyP1ZMv0XE7auIFsZ4LXFsj1o4Htc1smAnt4JKm5KSoRae72KyIisTrGgrV1azuyfCF0ugfVyviv8pvn9S7dDfmsYz8i4jyo4yhFBpYBnL19cXGczPtJqIskop4DjUSTBV0DgWtyUpTN7fzLeuLyqRX0c9Nf+t3mJwEmoUc6QBzh/AyWMU2XEdi/GYsRoa5WsXON+ZwISVOBv6xhuMwp8VgZz2ziEdg5vYNjD6LYrS5fPkq5AN0V1gHtJz4BOLEiUyJ9x34VhkK7LLMZDF7hquX9gkvpfWmOOGZda6ip/yBLMj50ayDIv5WefiQX/YFTaIMi7UFIhOUGA6SvvgF+54IbNeoeE4XWybz2VNNqfRBdQs3B0ozSD1XVpRT+FJy6MgblzxPgbcLMtcZz7eT1ItA+wYUWMG4+ws/ZIh6MkSHd0ZsBZ9HIRQDmni5vkPXQkNvq8ic6Srk/BXcpwvsQnMGXZJMIIBbenk1f9fBgE5tR9XbKjqOR0tjBl5rEJGLdkMTN7d1EeOl5db+BydlCtSzCW/WpDEZFT4mufNtcYqk8zi+UsSgAAAPgCAACORgT+WXJ/5uMShewmYFGyjSRtiJPEpEKSWUOjyAiMcxp1nXRQ5CUjmigJI4zKfQhEFJjnqM+0oXYPdZeF9h1QTKQYMGG4NwZaikssm/gBhc2I+Rl3w4/AhhIBYz2h/Q9dvxoRWN4UrksyP5RpmvHeRnHd5CC7/w604BXSFXLyw6PmeG6oiP2zrkPPcS2ladXxjiI7hnnGtyTR2bdytU6S5H1sMFDKj8yj027HvS//C5XsnRiQo0AuBmA/xrlb8UgrxfE9Xmr5yyaYQY9abQDEtinGKVpswTtLpSASN3aoYB0J7ENXb2d6nJ4Yg5wxSLCUJczFda9jdVaZiwhBGLirFpNzNQhQtDV/OgjblB4JYJ4FFiZGd9mhupmr0zScaN+ZRUwDs+JkugiEjsEFmbhkxgSSFowNpZy6YFSecYRAFk8LjKouWsvx61aD8mJXBu7UnppDKcv4KQHRPaBxxHnDIy3axb7X+UvnDJ2GmdyqBz7KY1SUZ2lXuD2siCNj10fUsqEu+QrXq70POwZ0NKvYFzKXwapvwkR80cxqPMFsBzvWzJt4FbpcIrMi6NPqAWYsRCqQqUJdT89js8F5dxtYLjv1z+CGv7PPku52eAGtfm5X4aVG/UlWb5JsAgC5BS5Z/0I/qoR/tEwKdkdkeEJzWo2t7F6bYNkSESP/uGHwmeN7wZ7UnozV7KyRUWuaJcROwZ3dW3z2tRHHAZji9ayCrWi+SzRBomYxzxfdgHQd1ZUV7DNUcMsC3Vt2zMnIBn7OarcHmdLQVKPtuiPbZ7QunHYvydmc2ARMDrjHwEoBYsQZr0rt9fv9N3xJr/VasePuIiJCiOGvcsXtNef4aNFe8SNeUmOJaHhJk71JPhzgfX121e+X16HE4vOUR3MJ9slxGp/l/vrM3xuakW4S0dYdQEkN9z7nSq/G3dslwhKXs9UUlMpxuvo2/QfvSK5pTK3ItP4RdKUAm8Pr9cyM32yaE/N/AjK2S6BYNJJVr1lxnTsPGfbbBfg+AAAAAA==');
