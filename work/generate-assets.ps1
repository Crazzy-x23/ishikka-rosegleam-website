Add-Type -AssemblyName System.Drawing

$root = Split-Path -Parent $PSScriptRoot
$out = Join-Path $root "public\images"
New-Item -ItemType Directory -Force -Path $out | Out-Null

function New-Canvas {
  param([int]$Width, [int]$Height)
  $bmp = New-Object System.Drawing.Bitmap $Width, $Height
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAlias
  return @($bmp, $g)
}

function Fill-Backdrop {
  param($g, [int]$Width, [int]$Height, [string]$Tone)
  $rect = New-Object System.Drawing.Rectangle 0, 0, $Width, $Height
  $start = [System.Drawing.Color]::FromArgb(255, 255, 252, 247)
  $end = [System.Drawing.Color]::FromArgb(255, 238, 228, 214)
  if ($Tone -eq "rose") { $end = [System.Drawing.Color]::FromArgb(255, 238, 215, 208) }
  if ($Tone -eq "sage") { $end = [System.Drawing.Color]::FromArgb(255, 226, 232, 222) }
  if ($Tone -eq "pearl") { $end = [System.Drawing.Color]::FromArgb(255, 244, 241, 233) }
  $brush = New-Object System.Drawing.Drawing2D.LinearGradientBrush $rect, $start, $end, 35
  $g.FillRectangle($brush, $rect)
  $brush.Dispose()

  $wash = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(90, 255, 255, 255))
  $g.FillEllipse($wash, [int]($Width * -0.12), [int]($Height * -0.16), [int]($Width * 0.58), [int]($Height * 0.45))
  $g.FillEllipse($wash, [int]($Width * 0.58), [int]($Height * 0.58), [int]($Width * 0.5), [int]($Height * 0.36))
  $wash.Dispose()
}

function Draw-Shadow {
  param($g, [int]$X, [int]$Y, [int]$W, [int]$H)
  for ($i = 0; $i -lt 8; $i++) {
    $alpha = 20 - ($i * 2)
    $brush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb($alpha, 43, 33, 28))
    $g.FillEllipse($brush, $X - ($i * 8), $Y - ($i * 3), $W + ($i * 16), $H + ($i * 6))
    $brush.Dispose()
  }
}

function New-GoldPen {
  param([int]$Width = 8, [int]$Alpha = 255)
  $pen = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb($Alpha, 191, 146, 38)), $Width
  $pen.StartCap = [System.Drawing.Drawing2D.LineCap]::Round
  $pen.EndCap = [System.Drawing.Drawing2D.LineCap]::Round
  return $pen
}

function Draw-Gem {
  param($g, [int]$X, [int]$Y, [int]$Size, [string]$Tone)
  $color = [System.Drawing.Color]::FromArgb(255, 231, 201, 192)
  if ($Tone -eq "pearl") { $color = [System.Drawing.Color]::FromArgb(255, 252, 248, 238) }
  if ($Tone -eq "opal") { $color = [System.Drawing.Color]::FromArgb(255, 213, 230, 225) }
  $brush = New-Object System.Drawing.SolidBrush $color
  $g.FillEllipse($brush, $X, $Y, $Size, $Size)
  $brush.Dispose()
  $shine = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(165, 255, 255, 255))
  $g.FillEllipse($shine, $X + [int]($Size * 0.18), $Y + [int]($Size * 0.14), [int]($Size * 0.32), [int]($Size * 0.22))
  $shine.Dispose()
  $pen = New-GoldPen 4 210
  $g.DrawEllipse($pen, $X, $Y, $Size, $Size)
  $pen.Dispose()
}

function Draw-Ring {
  param($g, [int]$Cx, [int]$Cy, [int]$R, [string]$GemTone = "rose")
  Draw-Shadow $g ($Cx - $R) ($Cy + [int]($R * 0.72)) ($R * 2) ([int]($R * 0.36))
  $pen = New-GoldPen ([int]($R * 0.16)) 255
  $g.DrawEllipse($pen, $Cx - $R, $Cy - [int]($R * 0.6), $R * 2, [int]($R * 1.35))
  $pen.Dispose()
  $highlight = New-GoldPen ([int]($R * 0.04)) 120
  $g.DrawArc($highlight, $Cx - $R + 24, $Cy - [int]($R * 0.6) + 18, ($R * 2) - 48, [int]($R * 1.35) - 36, 200, 125)
  $highlight.Dispose()
  Draw-Gem $g ($Cx - [int]($R * 0.28)) ($Cy - [int]($R * 0.9)) ([int]($R * 0.56)) $GemTone
}

function Draw-Hoops {
  param($g, [int]$Cx, [int]$Cy, [int]$R)
  Draw-Shadow $g ($Cx - $R - 145) ($Cy + [int]($R * 0.8)) ($R * 2 + 290) ([int]($R * 0.42))
  foreach ($offset in @(-110, 110)) {
    $pen = New-GoldPen ([int]($R * 0.12)) 255
    $g.DrawEllipse($pen, $Cx + $offset - $R, $Cy - $R, $R * 2, $R * 2)
    $pen.Dispose()
    Draw-Gem $g ($Cx + $offset - 24) ($Cy + $R - 20) 48 "pearl"
  }
}

function Draw-Necklace {
  param($g, [int]$Cx, [int]$Cy, [int]$W, [int]$H)
  Draw-Shadow $g ($Cx - [int]($W * 0.34)) ($Cy + [int]($H * 0.45)) ([int]($W * 0.68)) ([int]($H * 0.16))
  $pen = New-GoldPen 9 255
  $g.DrawArc($pen, $Cx - [int]($W / 2), $Cy - [int]($H / 2), $W, $H, 18, 144)
  $pen.Dispose()
  for ($i = 0; $i -le 12; $i++) {
    $angle = (22 + ($i * 10)) * [Math]::PI / 180
    $x = $Cx + [Math]::Cos($angle) * ($W / 2)
    $y = $Cy - [int]($H / 2) + [Math]::Sin($angle) * ($H / 2)
    Draw-Gem $g ([int]$x - 12) ([int]$y - 12) 24 "pearl"
  }
  $pendantY = $Cy + [int]($H * 0.34)
  $dropPen = New-GoldPen 6 230
  $g.DrawLine($dropPen, $Cx, $Cy + [int]($H * 0.18), $Cx, $pendantY)
  $dropPen.Dispose()
  Draw-Gem $g ($Cx - 34) ($pendantY - 6) 68 "rose"
}

function Draw-Bracelet {
  param($g, [int]$Cx, [int]$Cy, [int]$R)
  Draw-Shadow $g ($Cx - $R) ($Cy + [int]($R * 0.54)) ($R * 2) ([int]($R * 0.34))
  for ($i = 0; $i -lt 3; $i++) {
    $pen = New-GoldPen (9 - $i) (235 - ($i * 30))
    $g.DrawEllipse($pen, $Cx - $R + ($i * 28), $Cy - [int]($R * 0.42) + ($i * 18), ($R * 2) - ($i * 56), [int]($R * 0.84) - ($i * 36))
    $pen.Dispose()
  }
  Draw-Gem $g ($Cx - 38) ($Cy - [int]($R * 0.58)) 46 "opal"
  Draw-Gem $g ($Cx + 12) ($Cy - [int]($R * 0.58)) 46 "rose"
}

function Save-Asset {
  param([string]$Name, [int]$Width, [int]$Height, [string]$Tone, [scriptblock]$Draw)
  $pair = New-Canvas $Width $Height
  $bmp = $pair[0]
  $g = $pair[1]
  Fill-Backdrop $g $Width $Height $Tone
  & $Draw $g $Width $Height
  $path = Join-Path $out $Name
  $bmp.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)
  $g.Dispose()
  $bmp.Dispose()
}

Save-Asset "hero-rosegleam.png" 1600 1000 "rose" {
  param($g, $w, $h)
  Draw-Necklace $g 800 385 780 640
  Draw-Ring $g 510 660 145 "opal"
  Draw-Hoops $g 1080 650 112
}

Save-Asset "collection-earrings.png" 1000 1000 "pearl" {
  param($g, $w, $h)
  Draw-Hoops $g 500 470 150
}

Save-Asset "collection-rings.png" 1000 1000 "rose" {
  param($g, $w, $h)
  Draw-Ring $g 500 560 210 "rose"
}

Save-Asset "collection-necklaces.png" 1000 1000 "sage" {
  param($g, $w, $h)
  Draw-Necklace $g 500 430 660 620
}

Save-Asset "collection-bracelets.png" 1000 1000 "pearl" {
  param($g, $w, $h)
  Draw-Bracelet $g 500 530 270
}

Save-Asset "product-luna-hoops.png" 900 1100 "pearl" {
  param($g, $w, $h)
  Draw-Hoops $g 450 510 145
}

Save-Asset "product-aurelia-ring.png" 900 1100 "rose" {
  param($g, $w, $h)
  Draw-Ring $g 450 620 205 "opal"
}

Save-Asset "product-rose-pendant.png" 900 1100 "rose" {
  param($g, $w, $h)
  Draw-Necklace $g 450 430 620 680
}

Save-Asset "product-serene-bracelet.png" 900 1100 "sage" {
  param($g, $w, $h)
  Draw-Bracelet $g 450 570 270
}

Save-Asset "product-aurora-set.png" 900 1100 "pearl" {
  param($g, $w, $h)
  Draw-Necklace $g 450 360 560 560
  Draw-Hoops $g 450 770 90
}

Save-Asset "product-celeste-necklace.png" 900 1100 "sage" {
  param($g, $w, $h)
  Draw-Necklace $g 450 440 650 650
}

Save-Asset "product-noor-bangles.png" 900 1100 "pearl" {
  param($g, $w, $h)
  Draw-Bracelet $g 450 570 285
}

Save-Asset "product-opal-studs.png" 900 1100 "rose" {
  param($g, $w, $h)
  Draw-Gem $g 270 420 115 "opal"
  Draw-Gem $g 515 420 115 "opal"
  Draw-Shadow $g 245 640 405 90
}

Save-Asset "instagram-1.png" 700 700 "rose" { param($g, $w, $h) Draw-Hoops $g 350 330 92 }
Save-Asset "instagram-2.png" 700 700 "sage" { param($g, $w, $h) Draw-Ring $g 350 400 130 "opal" }
Save-Asset "instagram-3.png" 700 700 "pearl" { param($g, $w, $h) Draw-Necklace $g 350 290 460 430 }
Save-Asset "instagram-4.png" 700 700 "sage" { param($g, $w, $h) Draw-Bracelet $g 350 360 190 }
Save-Asset "instagram-5.png" 700 700 "rose" { param($g, $w, $h) Draw-Necklace $g 350 255 430 380; Draw-Hoops $g 350 535 58 }
Save-Asset "instagram-6.png" 700 700 "pearl" { param($g, $w, $h) Draw-Ring $g 350 400 125 "rose" }
