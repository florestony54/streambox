from django.db import models
from django.urls import reverse
from django.utils.text import slugify
from django.contrib.auth import get_user_model
User = get_user_model()

# Create your models here.
class Channel(models.Model):
    user = models.ForeignKey(User, related_name='channels',
                            on_delete=models.CASCADE)
    name = models.CharField('', max_length=55)

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)

    def get_absolute_url(self):
        return reverse("channel-view", kwargs={'pk':self.pk})

# class HostChannel(models.Model):
#     name = models.CharField('', max_length=55)
#
#     def publish(self):
#         self.save()
#
#     def get_absolute_url(self):
#         return reverse("channel-view", kwargs={'pk':self.pk})
