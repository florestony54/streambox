from django.db import models
from django.urls import reverse

# Create your models here.
class Channel(models.Model):
    name = models.CharField('', max_length=55)

    def publish(self):
        self.save()

    def get_absolute_url(self):
        return reverse("channel-view", kwargs={'pk':self.pk})
